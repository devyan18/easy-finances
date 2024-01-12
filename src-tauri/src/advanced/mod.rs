pub mod read {
    use crate::types::{Finance, FixedCostInfo, FixedCost, InvestmentInfo, Investment, VariableCostInfo, VariableCost};
    
    #[tauri::command]
    pub fn get_balance() -> Finance {
        let fixed_costs: FixedCostInfo = FixedCostInfo {
            list: vec![
                FixedCost {
                    name: String::from("Aluguel"),
                    amount: 1000.0,
                },
                FixedCost {
                    name: String::from("Condomínio"),
                    amount: 200.0,
                },
            ],
            total: 1200.0,
        };

        let investments: InvestmentInfo = InvestmentInfo {
            list: vec![
                Investment {
                    name: String::from("Tesouro Selic"),
                    amount: 100.0,
                },
                Investment {
                    name: String::from("Tesouro IPCA"),
                    amount: 200.0,
                },
            ],
            total: 300.0,
        };
        
        let variable_costs: VariableCostInfo = VariableCostInfo {
            list: vec![
                VariableCost {
                    name: String::from("Mercado"),
                    amount: 500.0,
                    is_essential: true,
                },
                VariableCost {
                    name: String::from("Lazer"),
                    amount: 200.0,
                    is_essential: false,
                },
            ],
            total: 700.0,
        };

        Finance {
            fixed_costs,
            investments,
            savings: 1000.0,
            variable_costs,
        }
    }

}

pub mod write {
    use crate::file_manage::files::{read_json_file, write_json_file, FIXED_COSTS_FILE_NAME};
    use crate::types::{FixedCost, CustomResponse};

    #[tauri::command]
    pub fn add_fixed_cost (new_cost:  FixedCost) -> CustomResponse<FixedCost> {

        println!("{:?}", new_cost);
        let fixed_cost_history: Vec<FixedCost> =  match read_json_file::<Vec<FixedCost>>(FIXED_COSTS_FILE_NAME.to_string()) {
            Ok(data) => data,
            Err(_) => return CustomResponse {
                status: 500,
                message: String::from("Error while reading fixed costs file"),
                data: None,
            }
        };
        
        let mut fixed_cost_history: Vec<FixedCost> = fixed_cost_history;

        fixed_cost_history.push(new_cost.clone());

        println!("{:?}", fixed_cost_history);

        match write_json_file(FIXED_COSTS_FILE_NAME.to_string(), &fixed_cost_history) {
            Ok(_) => (),
            Err(_) => return CustomResponse {
                status: 500,
                message: String::from("Error while writing fixed costs file"),
                data: None,
            }
        };

        CustomResponse {
            status: 200,
            message: String::from("Fixed cost added successfully"),
            data: Some(new_cost),
        }
    }
}
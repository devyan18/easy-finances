
pub mod finances {
    use serde::Serialize;

    #[derive(Serialize, Debug)]
    pub struct Finance {
        fixed_costs: f32,
        investments: f32,
        savings: f32,
        variable_costs: f32,
    }

    #[derive(Serialize, Debug)]
    pub struct FixedCost {
        name: String,
        amount: f32,
    }

    #[derive(Serialize, Debug)]
    pub struct Investment {
        name: String,
        amount: f32,
    }

    pub fn get_easy_finances(salary: f32) -> Finance {
        Finance {
            fixed_costs: (salary * 0.6),
            investments: (salary * 0.1),
            savings: (salary * 0.1),
            variable_costs: (salary * 0.2),
        }
    }

    pub fn add_fixed_cost(name: String, amount: f32) -> FixedCost {
        FixedCost {
            name,
            amount,
        }
    }

    pub fn add_investment(name: String, amount: f32) -> Investment {
        Investment {
            name,
            amount,
        }
    }



}
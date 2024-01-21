pub mod write {
    use crate::file_manage::constants::{FIXED_COSTS_FILE_NAME, VARIABLE_COSTS_FILE_NAME};
    use crate::file_manage::files::{read_json_file, write_json_file};

    use crate::finances::utils::exist_variable_cost;
    use crate::types::{CustomResponse, FixedCost, VariableCost};

    #[tauri::command]
    pub fn add_fixed_cost(new_cost: FixedCost) -> CustomResponse {
        // timeout of 2000 ms
        std::thread::sleep(std::time::Duration::from_millis(500));

        let fixed_cost_history: Vec<FixedCost> =
            match read_json_file::<Vec<FixedCost>>(FIXED_COSTS_FILE_NAME.to_string()) {
                Ok(data) => data,
                Err(error) => {
                    return CustomResponse {
                        status: 500,
                        message: format!("Error while reading fixed costs file: {}", error),
                        data: None,
                    }
                }
            };

        let mut fixed_cost_history: Vec<FixedCost> = fixed_cost_history;
        fixed_cost_history.push(new_cost.clone());

        match write_json_file(FIXED_COSTS_FILE_NAME.to_string(), &fixed_cost_history) {
            Ok(_) => (),
            Err(error) => {
                return CustomResponse {
                    status: 500,
                    message: format!("Error while writing fixed costs file: {}", error),
                    data: None,
                }
            }
        };

        let new_cost_string: String = match serde_json::to_string(&new_cost) {
            Ok(data) => data,
            Err(error) => {
                return CustomResponse {
                    status: 500,
                    message: format!("Error while serializing new cost: {}", error),
                    data: None,
                }
            }
        };

        CustomResponse {
            status: 200,
            message: String::from("Fixed cost added successfully"),
            data: Some(new_cost_string),
        }
    }

    #[tauri::command]
    pub fn add_variable_cost(new_cost: VariableCost) -> CustomResponse {
        let variable_cost_history: Vec<VariableCost> =
            match read_json_file::<Vec<VariableCost>>(VARIABLE_COSTS_FILE_NAME.to_string()) {
                Ok(data) => data,
                Err(error) => {
                    return CustomResponse {
                        status: 500,
                        message: format!("Error while reading variable costs file: {}", error),
                        data: None,
                    }
                }
            };

        match exist_variable_cost(new_cost.name.clone()) {
            true => {
                return CustomResponse {
                    status: 500,
                    message: String::from("Variable cost already exists"),
                    data: None,
                }
            }
            false => (),
        }

        let mut variable_cost_history: Vec<VariableCost> = variable_cost_history;

        variable_cost_history.push(new_cost.clone());

        match write_json_file(VARIABLE_COSTS_FILE_NAME.to_string(), &variable_cost_history) {
            Ok(_) => (),
            Err(error) => {
                return CustomResponse {
                    status: 500,
                    message: format!("Error while writing variable costs file: {}", error),
                    data: None,
                }
            }
        };

        let new_cost_string: String = match serde_json::to_string_pretty(&new_cost) {
            Ok(data) => data,
            Err(error) => {
                return CustomResponse {
                    status: 500,
                    message: format!("Error while serializing new cost: {}", error),
                    data: None,
                }
            }
        };

        CustomResponse {
            status: 200,
            message: String::from("Variable cost added successfully"),
            data: Some(new_cost_string),
        }
    }
}

pub mod read {
    use crate::file_manage::constants::{FIXED_COSTS_FILE_NAME, VARIABLE_COSTS_FILE_NAME};
    use crate::file_manage::files::read_json_file;

    use crate::types::{CustomResponse, FixedCost, VariableCost};

    #[tauri::command]
    pub fn get_fixed_costs() -> CustomResponse {
        let fixed_cost_history: Vec<FixedCost> =
            match read_json_file::<Vec<FixedCost>>(FIXED_COSTS_FILE_NAME.to_string()) {
                Ok(data) => data,
                Err(error) => {
                    return CustomResponse {
                        status: 500,
                        message: format!("Error while reading fixed costs file: {}", error),
                        data: None,
                    }
                }
            };

        let fixed_cost_history_string: String =
            match serde_json::to_string_pretty(&fixed_cost_history) {
                Ok(data) => data,
                Err(error) => {
                    return CustomResponse {
                        status: 500,
                        message: format!("Error while serializing fixed costs: {}", error),
                        data: None,
                    }
                }
            };

        CustomResponse {
            status: 200,
            message: String::from("Fixed costs retrieved successfully"),
            data: Some(fixed_cost_history_string),
        }
    }

    #[tauri::command]
    pub fn get_variable_costs() -> CustomResponse {
        let variable_cost_history: Vec<VariableCost> =
            match read_json_file::<Vec<VariableCost>>(VARIABLE_COSTS_FILE_NAME.to_string()) {
                Ok(data) => data,
                Err(error) => {
                    return CustomResponse {
                        status: 500,
                        message: format!("Error while reading variable costs file: {}", error),
                        data: None,
                    }
                }
            };

        let variable_cost_history_string: String =
            match serde_json::to_string_pretty(&variable_cost_history) {
                Ok(data) => data,
                Err(error) => {
                    return CustomResponse {
                        status: 500,
                        message: format!("Error while serializing variable costs: {}", error),
                        data: None,
                    }
                }
            };

        CustomResponse {
            status: 200,
            message: String::from("Variable costs retrieved successfully"),
            data: Some(variable_cost_history_string),
        }
    }
}

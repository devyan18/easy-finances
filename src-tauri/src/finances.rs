pub mod utils {
    use crate::{
        file_manage::{constants::VARIABLE_COSTS_FILE_NAME, files::read_json_file},
        types::VariableCost,
    };

    pub fn exist_variable_cost(name: String) -> bool {
        let variable_cost_history: Vec<VariableCost> =
            match read_json_file::<Vec<VariableCost>>(VARIABLE_COSTS_FILE_NAME.to_string()) {
                Ok(data) => data,
                Err(_error) => return false,
            };

        for variable_cost in variable_cost_history {
            if variable_cost.name == name {
                return true;
            }
        }

        false
    }
}

pub mod constants {
    pub const BALANCE_FOLDER_NAME: &str = "easy_finances";
    pub const ADVANCED_FILE_HISTORY: &str = "advanced_history.json";
    pub const FIXED_COSTS_FILE_NAME: &str = "fixed_costs.json";
    pub const VARIABLE_COSTS_FILE_NAME: &str = "variable_costs.json";
}

pub mod files {
    use std::io;
    use std::path::PathBuf;

    use crate::file_manage::constants::BALANCE_FOLDER_NAME;
    use crate::types::FinanceHistory;

    use super::constants::ADVANCED_FILE_HISTORY;

    pub fn create_easy_finances_folder() {
        use std::fs;

        let desktop: PathBuf = PathBuf::from(std::env::var("USERPROFILE").unwrap()).join("Desktop");
        let easy_finances_folder: PathBuf = desktop.join(BALANCE_FOLDER_NAME);

        if !easy_finances_folder.exists() {
            fs::create_dir(easy_finances_folder).unwrap();
        }
    }

    pub fn get_easy_finances_path() -> PathBuf {
        create_easy_finances_folder();
        let desktop: PathBuf = PathBuf::from(std::env::var("USERPROFILE").unwrap()).join("Desktop");
        let easy_finances_folder: PathBuf = desktop.join(BALANCE_FOLDER_NAME);

        easy_finances_folder
    }

    pub fn read_json_file<T>(file_name: String) -> Result<T, io::Error>
    where
        T: serde::de::DeserializeOwned,
    {
        create_easy_finances_folder();
        use std::fs::File;
        use std::io::prelude::*;

        let path: PathBuf = get_easy_finances_path().join(file_name);

        // if file doesn't exist, create it
        if !path.exists() {
            let mut file: File = match File::create(&path) {
                Ok(file) => file,
                Err(why) => panic!("couldn't create file: {}", why),
            };
            let data: String = match serde_json::to_string(&Vec::<FinanceHistory>::new()) {
                Ok(data) => data,
                Err(why) => panic!("couldn't serialize data: {}", why),
            };

            match file.write_all(data.as_bytes()) {
                Ok(_) => (),
                Err(why) => panic!("couldn't write to file: {}", why),
            };
        }

        let mut file: File = File::open(&path)?;
        let mut contents: String = String::new();
        file.read_to_string(&mut contents)?;

        let data: T = serde_json::from_str(&contents).unwrap();

        Ok(data)
    }

    pub fn write_json_file<T>(file_name: String, data: T) -> Result<(), io::Error>
    where
        T: serde::Serialize,
    {
        create_easy_finances_folder();
        use std::fs::File;
        use std::io::prelude::*;

        let path: PathBuf = get_easy_finances_path().join(file_name);

        let mut file: File = match File::create(path) {
            Ok(file) => file,
            Err(why) => panic!("couldn't create file: {}", why),
        };

        let data: String = serde_json::to_string_pretty(&data).unwrap();

        return match file.write_all(data.as_bytes()) {
            Ok(_) => Ok(()),
            Err(why) => panic!("couldn't write to file: {}", why),
        };
    }

    pub fn read_history() -> Result<Vec<FinanceHistory>, io::Error> {
        create_easy_finances_folder();
        let history: Vec<FinanceHistory> =
            read_json_file::<Vec<FinanceHistory>>(ADVANCED_FILE_HISTORY.to_string())?;

        Ok(history)
    }
}

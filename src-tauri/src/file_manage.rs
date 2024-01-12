pub mod files {
	pub const BALANCE_FILE_NAME: &str = "balance.json";
	pub const BALANCE_FOLDER_NAME: &str = "easy_finances";
	pub const ADVANCED_FILE_HISTORY: &str = "advanced_history.json";
	pub const FIXED_COSTS_FILE_NAME: &str = "fixed_costs.json";

	use std::io;
	use std::path::PathBuf;

	use crate::types::FinanceHistory;

	pub fn create_easy_finances_folder () {
		use std::fs;

		let desktop = PathBuf::from(std::env::var("USERPROFILE").unwrap()).join("Desktop");
		let easy_finances_folder = desktop.join(BALANCE_FOLDER_NAME);

		if !easy_finances_folder.exists() {
			fs::create_dir(easy_finances_folder).unwrap();
		}
	}

	pub fn get_easy_finances_path () -> PathBuf {
		create_easy_finances_folder();
		let desktop = PathBuf::from(std::env::var("USERPROFILE").unwrap()).join("Desktop");
		let easy_finances_folder = desktop.join(BALANCE_FOLDER_NAME);

		easy_finances_folder
	}

	pub fn read_json_file <T>(file_name: String) -> Result<T, io::Error> where T: serde::de::DeserializeOwned {
		create_easy_finances_folder();
		use std::fs::File;
		use std::io::prelude::*;

		let path = get_easy_finances_path().join(file_name);


		// if file doesn't exist, create it
		if !path.exists() {
			let mut file: File = File::create(&path).unwrap();
			let data: String = serde_json::to_string(&Vec::<FinanceHistory>::new()).unwrap();
			file.write_all(data.as_bytes()).unwrap();
		}

		let mut file: File = File::open(&path)?;
		let mut contents: String = String::new();
		file.read_to_string(&mut contents)?;

		let data: T = serde_json::from_str(&contents).unwrap();

		Ok(data)
	}

	pub fn write_json_file <T>(file_name: String, data: T) -> Result<(), io::Error> where T: serde::Serialize {
		create_easy_finances_folder();
		use std::fs::File;
		use std::io::prelude::*;

		let path: PathBuf = get_easy_finances_path().join(file_name);

		let mut file: File = File::create(path)?;
		let data: String = serde_json::to_string_pretty(&data).unwrap();
		file.write_all(data.as_bytes())?;

		Ok(())
	}

	pub fn read_history () -> Result<Vec<FinanceHistory>, io::Error> {
		create_easy_finances_folder();
		let history: Vec<FinanceHistory> = read_json_file::<Vec<FinanceHistory>>(ADVANCED_FILE_HISTORY.to_string())?;

		Ok(history)
	}
}

pub mod files {

  const BALANCE_FILE_NAME: &str = "balance.json";
  const BALANCE_FOLDER_NAME: &str = "easy_finances";

  use serde::{Serialize, Deserialize};
  use std::io;
  use std::path::PathBuf;

  #[derive(Serialize, Deserialize, Debug)]
  pub struct BalanceFile {
    salary: f32,
    fixed_costs: f32,
    investments: f32,
    savings: f32,
    variable_costs: f32,
  }

  pub fn create_easy_finances_folder () {
    use std::fs;

    let desktop = PathBuf::from(std::env::var("USERPROFILE").unwrap()).join("Desktop");
    let easy_finances_folder = desktop.join(BALANCE_FOLDER_NAME);

    if !easy_finances_folder.exists() {
      fs::create_dir(easy_finances_folder).unwrap();
    }
  }

  pub fn get_easy_finances_path () -> PathBuf {
    let desktop = PathBuf::from(std::env::var("USERPROFILE").unwrap()).join("Desktop");
    let easy_finances_folder = desktop.join(BALANCE_FOLDER_NAME);

    easy_finances_folder
  }

  pub fn create_json_file_if_not_exist () ->  Result<(), io::Error>{

    use std::fs::File;
    use std::io::prelude::*;
    
    create_easy_finances_folder();

    let folder_path = get_easy_finances_path();

    let file_path =  folder_path.join(BALANCE_FILE_NAME);

    if file_path.exists() {
      return Ok(())
    }
    
    let mut file = File::create(file_path)?;

    let default_balance_file = BalanceFile {
      salary: 0.0,
      fixed_costs: 0.0,
      investments: 0.0,
      savings: 0.0,
      variable_costs: 0.0,
    };

    file.write_all(serde_json::to_string_pretty(&default_balance_file)?.as_bytes())?;

    Ok(())
  }

  pub fn read_balance_file () -> BalanceFile {
    use std::fs::File;
    use std::io::prelude::*;


    let folder_path = get_easy_finances_path();

    let file_path =  folder_path.join(BALANCE_FILE_NAME);

    let mut file = File::open(file_path).unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();
    let balance_file: BalanceFile = serde_json::from_str(&contents).unwrap();
    balance_file
    
  }
}
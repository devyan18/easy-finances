#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod finances;
pub mod file_manage;

use finances::finances::{get_easy_finances, Finance};
use file_manage::files::{create_json_file_if_not_exist, read_balance_file, BalanceFile};


#[tauri::command]
fn easy_finances(salary: f32) -> Finance {
    get_easy_finances(salary)
}

#[tauri::command]
fn create_balance_file () -> &'static str{
    match create_json_file_if_not_exist() {
        Ok(_) => "File created",
        Err(_e) => "Error",
    }
}

#[tauri::command]
fn advanced_finances() -> BalanceFile {
    read_balance_file()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![easy_finances, create_balance_file, advanced_finances])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

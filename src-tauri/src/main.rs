#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod advanced;
pub mod file_manage;
pub mod finances;
pub mod types;

use advanced::write::{add_fixed_cost, add_variable_cost};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![add_fixed_cost, add_variable_cost])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

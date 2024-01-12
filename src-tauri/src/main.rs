#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// pub mod file_manage;
pub mod types;
pub mod advanced;
pub mod file_manage;

use advanced::{read::get_balance, write::add_fixed_cost};



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_balance, add_fixed_cost])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

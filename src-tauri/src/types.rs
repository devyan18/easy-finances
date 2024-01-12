use serde::{Serialize, Deserialize};

#[derive(Serialize, Debug, Deserialize)]
pub struct FixedCost {
    pub name: String,
    pub amount: f32,
}

// add .clone to FixedCost
impl Clone for FixedCost {
    fn clone(&self) -> Self {
        Self {
            name: self.name.clone(),
            amount: self.amount.clone(),
        }
    }
}

#[derive(Serialize, Debug, Deserialize)]
pub struct FixedCostInfo {
    pub list: Vec<FixedCost>,
    pub total: f32,
}

#[derive(Serialize, Debug, Deserialize)]
pub struct Investment {
    pub name: String,
    pub amount: f32,
}

#[derive(Serialize, Debug, Deserialize)]
pub struct InvestmentInfo {
    pub list: Vec<Investment>,
    pub total: f32,
}

#[derive(Serialize, Debug, Deserialize)]
pub struct VariableCost {
    pub name: String,
    pub amount: f32,
    pub is_essential: bool,
}

#[derive(Serialize, Debug, Deserialize)]
pub struct VariableCostInfo {
    pub list: Vec<VariableCost>,
    pub total: f32,
}

#[derive(Serialize, Debug, Deserialize)]
pub struct Finance {
    pub fixed_costs: FixedCostInfo,
    pub investments: InvestmentInfo,
    pub savings: f32,
    pub variable_costs: VariableCostInfo,
}

#[derive(Serialize, Debug, Deserialize)]
pub struct FinanceHistory {
    pub date: String,
    pub balance: Finance
}

#[derive(Serialize, Debug, Deserialize)]
pub struct CustomResponse<T> {
    pub status: u16,
    pub message: String,
    pub data: Option<T>
}
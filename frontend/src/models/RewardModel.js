class Reward {
  constructor(reward_id, name, description, carbon_credit_cost, available_quantity, created_at) {
    this.reward_id = reward_id;
    this.name = name;
    this.description = description;
    this.carbon_credit_cost = carbon_credit_cost;
    this.available_quantity = available_quantity;
    this.created_at = created_at;
  }

  toObject() {
    return {
      reward_id: this.reward_id,
      name: this.name,
      description: this.description,
      carbon_credit_cost: this.carbon_credit_cost,
      available_quantity: this.available_quantity,
      created_at: this.created_at,
    };
  }

  toString() {
    return JSON.stringify(this.toObject());
  }
}

export default Reward;

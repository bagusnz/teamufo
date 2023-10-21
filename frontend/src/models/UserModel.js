class User {
  constructor(user_id, username, email, carbon_credits, accumulated_carbon_credits, created_at, last_login) {
    this.user_id = user_id;
    this.username = username;
    this.email = email;
    this.carbon_credits = carbon_credits;
    this.accumulated_carbon_credits = accumulated_carbon_credits;
    this.created_at = created_at;
    this.last_login = last_login;
  }

  toObject() {
    return {
      user_id: this.user_id,
      username: this.username,
      email: this.email,
      carbon_credits: this.carbon_credits,
      accumulated_carbon_credits: this.accumulated_carbon_credits,
      created_at: this.created_at,
      last_login: this.last_login,
    };
  }

  toString() {
    return JSON.stringify(this.toObject());
  }
}

export default User;

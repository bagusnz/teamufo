class User {
  constructor(user_id, username, email, created_at, last_login, carbon_credits) {
    this.user_id = user_id;
    this.username = username;
    this.email = email;
    this.created_at = created_at;
    this.last_login = last_login;
    this.carbon_credits = carbon_credits || 0; // Initialize carbon credits with 0 if not provided
  }

  toObject() {
    return {
      user_id: this.user_id,
      username: this.username,
      email: this.email,
      created_at: this.created_at,
      last_login: this.last_login,
      carbon_credits: this.carbon_credits,
    };
  }

  toString() {
    return JSON.stringify(this.toObject());
  }
}

export default User;

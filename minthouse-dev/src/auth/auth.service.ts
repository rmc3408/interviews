class AuthService {
  login(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const savedUser = this.getCurrentUser()
      
      if (savedUser !== null && savedUser === email) {
        console.log('user logged and same')
        resolve()
      } else {
        console.error('Please, login again since user was not registered before')
        reject()
      }
    })
  }

  logout(): void {
    localStorage.removeItem("user");
  }

  register(email: string): void {
    localStorage.setItem('user', email)
  }

  getCurrentUser(): string | null {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return user;
  }
}

export default new AuthService();
// utils/auth.ts
type User = {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'driver' | 'user';
    avatar?: string;
  };
  
  // Mock session storage
  const session = {
    get: (key: string) => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
      }
      return null;
    },
    set: (key: string, value: string) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      }
    },
    remove: (key: string) => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    }
  };
  
  export const authService = {
    login(email: string, password: string): User | null {
      const mockUsers: User[] = [
        {
          id: "1",
          name: "Admin",
          email: "admin@jaykayrides.com",
          password: "admin123",
          role: "admin",
          avatar: "/avatars/admin.png",
        },
        {
          id: "2",
          name: "Driver",
          email: "driver@jaykayrides.com",
          password: "driver123",
          role: "driver",
          avatar: "/avatars/driver1.png",
        },
        {
          id: "3",
          name: "User",
          email: "user@example.com",
          password: "user123",
          role: "user",
          avatar: "/avatars/user1.png",
        },
      ];
  
      const user = mockUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        // Store user in session
        session.set('currentUser', JSON.stringify(user));
        return user;
      }
      return null;
    },
    logout(): void {
      session.remove('currentUser');
    },
    getCurrentUser(): User | null {
      const user = session.get('currentUser');
      return user ? JSON.parse(user) : null;
    },
    isAuthenticated(): boolean {
      return !!this.getCurrentUser();
    }
  };
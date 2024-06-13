export const loginTemplate = `
    <section id="login">
        <h2>Login</h2>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
        <!-- already have an account? -->
        <p>Don't have an account? <a href="#" id="register-link">Register</a></p>
    </section>
`;

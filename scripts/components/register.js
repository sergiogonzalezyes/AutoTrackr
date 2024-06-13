export const registerTemplate = `
    <section id="register">
        <div class="register-wrapper">
            <h2>Register</h2>
            <form id="register-form">
                <label for="new-username">Username:</label>
                <input type="text" id="new-username" name="new-username" required>
                <label for="new-password">Password:</label>
                <input type="password" id="new-password" name="new-password" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <button type="submit">Register</button>
            </form>
            <!-- already have an account? -->
            <p>Already have an account? <a href="#" id="login-link">Login</a></p>
        </div>
    </section>
`;

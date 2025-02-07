export default function Contact() {
    return(
        <form action="" method="POST">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" required />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <input type="submit" value="Submit" />
        </form>
    )
}
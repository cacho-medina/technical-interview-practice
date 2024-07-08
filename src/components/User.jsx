function User({ user, deleteUser }) {
    const { name, username, email, phone, website } = user;
    return (
        <div className="user">
            <button className="delete" onClick={() => deleteUser(user.id)}>
                X
            </button>
            <h3>{name}</h3>
            <h4>{username}</h4>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
}

export default User;

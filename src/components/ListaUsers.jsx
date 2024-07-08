import User from "./User";

function ListaUsers({ users, setUsers }) {
    function deleteUser(id) {
        const filtrados = users.filter((usuario) => id != usuario.id);
        setUsers(filtrados);
    }
    return (
        <div className="lista">
            {users.length > 0 ? (
                users.map((usuario) => (
                    <User
                        user={usuario}
                        key={usuario.id}
                        deleteUser={deleteUser}
                    />
                ))
            ) : (
                <h2>No se encontraron usuarios</h2>
            )}
        </div>
    );
}

export default ListaUsers;

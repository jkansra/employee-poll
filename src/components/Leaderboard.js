import { connect } from "react-redux"


export const Leaderboard = ({ users, userIds }) => {
    return (
        <table>
            <tr>
                <th>Users</th>
                <th>Answered</th>
                <th>Created</th>
            </tr>
            {
                userIds?.map((userId) => (
                    <tr key={userId}>
                        <td>
                            <div className="users-column">
                                <img src={users[userId].avatarURL} alt={`avatar of ${userId}`} />
                                <div>
                                    <p>{users[userId].name}</p>
                                    <p>{userId}</p>
                                </div>
                            </div>
                        </td>
                        <td>{Object.keys(users[userId].answers)?.length}</td>
                        <td>{users[userId].questions?.length}</td>
                    </tr>
                )
                )}
        </table>
    )
}

const mapStateToProps = ({ users }) => ({
    users,
    userIds: Object.keys(users).sort((a, b) => (Object.keys(users[b].answers)?.length + users[b].questions?.length) - (Object.keys(users[a].answers)?.length + users[a].questions?.length)),
})

export default connect(mapStateToProps)(Leaderboard);

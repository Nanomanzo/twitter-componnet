import './App.css'
import TwitterCard from './TwitterCard.jsx';

const users = [
  {
    userName: "kikobeats",
    name: "kiko beats",
    isFollowing: true
  },
  {
    userName: "midudev",
    name: "migtuel angel duran",
    isFollowing: false
  },
  {
    userName: "midudevsdjfhsjkdhfjkshdjkfsd",
    name: "kiko matamores",
    isFollowing: false
  },
  {
    userName: "pheralb123",
    name: "pheralb",
    isFollowing: true
  },
]

function App() {

  const format = (userName) => {
    return `@${userName}`
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterCard
              key={userName}
              formatUserName={format}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterCard>
          ))
        }
      </div>
    </>
  )
}

export default App

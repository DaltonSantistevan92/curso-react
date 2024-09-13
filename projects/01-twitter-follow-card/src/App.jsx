
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]


function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App






// function App() {
  
//   return (
//     <section className='App'>
//       <TwitterFollowCard   
//         userName="midudev">
//         Miguel Ángel Durán
//       </TwitterFollowCard>

//       { /* add comentario */}

//       <TwitterFollowCard
//         userName="pherald" >
//         Pablo Hernadez
//       </TwitterFollowCard>
//     </section>
//   )
// }


// function App() {
//   const format = ( userName ) => `@${userName}`;

//   return (
//     <section className='App'>
//       <TwitterFollowCard  formatUserName={format} 
//                           isFollowing 
//                           userName="midudev" 
//                           name="Miguel Ángel Durán" />
//       <TwitterFollowCard  formatUserName={format} 
//                           isFollowing={false} 
//                           userName="pherald" 
//                           name="Pablo Hernadez" />
//       <TwitterFollowCard  formatUserName={format} 
//                           userName="elonmusk" 
//                           name="Elon Musk" />
//       <TwitterFollowCard  formatUserName={format} 
//                           userName="vxnder" 
//                           name="Vanderhart" />
//     </section>
//   )
// }



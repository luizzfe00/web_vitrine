import type { NextPage } from 'next'
import LoginForm from '../components/LoginForm'

const Home: NextPage = () => {
  return (
      <div className='w-full h-full flex justify-center items-center'>
        <LoginForm />
      </div>
  )
}

export default Home

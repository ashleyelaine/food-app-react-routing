import MainNav from '../components/MainNav'

const AboutPage = () => {

  return (
    <div>
      <h1>About</h1>
      <MainNav />
      <p>Some fun interesting information about this food app.</p>
      <img style={{maxWidth: "300px", padding: "30px"}} alt="donut" src="/food/donut.png" />
    </div>
  )
}

export default AboutPage
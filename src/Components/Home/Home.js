import React, {useState, useEffect} from 'react'
import './Home.css'
import logo from '../../Images/build.gif'

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120 - Math.random() * 100);
  const toRotate = [ "Creative Web Developer", "Full Stack Software Engineer", "Computer enthusiast"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }

  return (
    <section className='Home' id='home'>
        <div className='HomeText'>
          <div>
            Hello! I am
          </div>
          <div className='LargeText'>
            Md. Yasin
          </div>
          <div className='LargeText' style={{display: 'flex'}}>
           {text}<div className='TextCursor'/>
          </div>
          <br /><br /><br />
          <div className='MediumText'>
          I’m a full stack software engineer specializing in building and designing exceptional digital experiences. 
          I am continuously looking forward to acquiring new skills and exploring new technologies as well as meeting new people. 
          </div>
          <div className='ResumeBtn'>
            RESUME
          </div>
        </div>
        {/* <div className='HomeImage'>
          <img src={logo} width='300px' alt='dp' />
        </div> */}
    </section>
  )
}

export default Home

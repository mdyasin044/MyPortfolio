import project1 from '../../Images/project1.PNG'
import project2 from '../../Images/project2.PNG'
import project3 from '../../Images/project3.PNG'
import project4 from '../../Images/project4.PNG'


const Data = [
    {
        title: 'Travellica',
        imageUrl: project1,
        description: 'A trip and travel blog site developed using Django framework. Users can make an account here, create posts, upload images and see others posts.',
        tools: ['Django', 'Python', 'Postgresql', 'REST APIs', 'Heroku'],
        link: 'https://travellica.onrender.com/',
    },
    {
        title: 'Kothahok',
        imageUrl: project4,
        description: 'Kothahok is a proprietary videotelephony software application. Users can create custom rooms for live video conferencing and text messaging.',
        tools: ['React', 'NodeJS', 'WebRTC', 'Socket.io', 'Express'],
        link: 'https://kothahok.netlify.app',
    },
    {
        title: 'Knox Mobile Enrollment',
        imageUrl: project2,
        description: 'A solution which is for enterprises that require bulk device enrollment with little configuration variance amongst the devices deployed.',
        tools: ['Electron', 'React', 'Redux', 'NodeJS', 'Typescript'],
        link: 'https://www.samsungknox.com/en/blog/introducing-kme-direct',
    },
    {
        title: 'Samsung iOS Health',
        imageUrl: project3,
        description: ' An iOS application that serves to track various aspects of daily life contributing to well being such as physical activity, diet, and sleep.',
        tools: ['Swift', 'Objective-C', 'REST APIs'],
        link: 'https://apps.apple.com/us/app/samsung-health/id1224541484',
    },
]

export default Data
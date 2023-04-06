// interface IProyect {
//     name : String
//     dev: String
//     github: String
//     desc: String
//     photo: String
// }

let proyects = []

export default defineEventHandler( () => {
    proyects = [
        {
            name: 'Quizz App',
            dev: 'https://app-quiz-amse.vercel.app',
            github: 'https://github.com/AlexSilvaEneque/app-quiz',
            desc: 'Aplicación Quiz desarrollado con VueJs Composition API',
            photo: '/img/quizzapp.png'
        },
        {
            name: 'Weather App',
            dev: 'https://weather-app-amsedev.vercel.app',
            github: 'https://github.com/AlexSilvaEneque/weather-app',
            desc: 'Aplicación del tiempo elaborada con Vuejs (Composition API) y Vuetify',
            photo: '/img/weatherapp.png'
        },
    ]

    return proyects
})
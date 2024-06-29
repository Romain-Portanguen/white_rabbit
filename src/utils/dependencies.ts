export function getDependenciesByProjectType(projectType: string): string[] {
    const dependenciesMap: Record<string, string[]> = {
        'React': [
            '@types/react-dom',
            '@types/react-redux',
            '@types/react',
            'axios',
            'react-datepicker',
            'react-dom',
            'react-icons',
            'react-modal',
            'react-redux',
            'react-router-dom',
            'react-toastify',
            'redux',
            'styled-components',
            'yup',
            'formik',
            'mobx',
            'mobx-react-lite',
            'prop-types',
            'redux-thunk',
            'sass',
            'tailwindcss'
        ],
        'Vue.js': [
            'axios',
            'vue-router',
            'vue',
            'vuex-persistedstate',
            'vuex',
            'yup',
            '@vue/composition-api',
            'vue-class-component',
            'vue-property-decorator',
            'vue-axios',
            'vue-i18n',
            'vue-meta',
            'vue-toastification',
            'vuex-module-decorators',
            'vuetify',
            'vue-chartjs',
            'vue-moment'
        ],
        'Node.js': [
            'bcryptjs',
            'cors',
            'dotenv',
            'express',
            'jsonwebtoken',
            'mongoose',
            'ts-node',
            'yup',
            '@types/express',
            '@types/node',
            'body-parser',
            'express-validator',
            'helmet',
            'morgan',
            'nodemon',
            'passport',
            'passport-jwt',
            'socket.io',
            'winston'
        ]
    };

    return dependenciesMap[projectType] || [];
}

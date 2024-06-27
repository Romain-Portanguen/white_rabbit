export const getDependenciesByProjectType = (projectType: string, language: string): string[] => {
  const additionalDependencies: { [key: string]: { [key: string]: string[] } } = {
      'React': {
          'JavaScript': ['react-router-dom', 'redux', 'axios', 'styled-components', 'tailwindcss'],
          'TypeScript': ['react-router-dom', 'redux', 'axios', 'styled-components', 'tailwindcss', '@types/react', '@types/react-dom']
      },
      'Angular': {
          'JavaScript': ['@angular/material', 'rxjs', 'tailwindcss'],
          'TypeScript': ['@angular/material', 'rxjs', 'tailwindcss']
      },
      'Node.js': {
          'JavaScript': ['express', 'cors', 'body-parser', 'mongoose'],
          'TypeScript': ['express', 'cors', 'body-parser', 'mongoose', '@types/express', '@types/cors', '@types/body-parser', '@types/mongoose']
      },
      'Vue.js': {
          'JavaScript': ['vue-router', 'vuex', 'axios', 'vuetify', 'tailwindcss'],
          'TypeScript': ['vue-router', 'vuex', 'axios', 'vuetify', 'tailwindcss', '@types/vue']
      }
  };

  return additionalDependencies[projectType][language] || [];
};

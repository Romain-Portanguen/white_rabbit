export const getDependenciesByProjectType = (projectType: string): string[] => {
  const additionalDependencies: { [key: string]: string[] } = {
      'React': ['styled-components', 'tailwindcss'],
      'Angular': ['@angular/material', 'tailwindcss'],
      'Node.js': [],
      'Vue.js': ['vuetify', 'tailwindcss']
  };

  return additionalDependencies[projectType] || [];
};

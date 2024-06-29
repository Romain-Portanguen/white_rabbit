export function getDependenciesByProjectType(projectType: string): string[] {
    const dependenciesMap: Record<string, string[]> = {
        'React': ['react', 'react-dom'],
        'Vue.js': ['vue'],
        'Node.js': ['express']
    };

    return dependenciesMap[projectType] || [];
}

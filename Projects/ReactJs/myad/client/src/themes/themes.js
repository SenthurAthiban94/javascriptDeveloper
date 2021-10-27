const themes = {
    colors:{
        advertiser: {
          primary: '#FFDE03',
          secondary: '#ff0266',
        },
        publisher: {
          primary: '#00E676',
          secondary: '#000000',
        },
        agent: {
          primary: '#6002EE',
          secondary: '#90EE02',
        },
        admin: {
          primary: '#4F46E5',
          secondary: '#00dac6',
        },
    }
};

// Color Properties
const validColorProperties = ['bg','text','border','ring','ring-offset','divide','from','placeholder'];

module.exports = {
    themes,
    safeList: ()=>{
        const safeClasses = [];
        Object.keys(themes.colors).forEach(theme=>{
            Object.keys(themes.colors[theme]).forEach(property=>{
                validColorProperties.forEach(root=>{
                    safeClasses.push(`${root}-${theme}-${property}`);
                })
            });
        });
        return safeClasses;
    }
}
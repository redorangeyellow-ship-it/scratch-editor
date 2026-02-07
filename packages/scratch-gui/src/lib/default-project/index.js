import overrideDefaultProject from '!arraybuffer-loader!./override-default-project.sb3';

const defaultProject = translator => {
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: overrideDefaultProject
    }];
};

export default defaultProject;

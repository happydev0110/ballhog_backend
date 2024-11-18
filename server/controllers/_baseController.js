export const getOneCtrl = async (searchFields, Model) => {
    const response = await Model.findOne(searchFields);
    return response;
}

export const getManyCtrl = async (searchFields, Model) => {
    const response = await Model.find(searchFields);
    return response;
}

export const addOneCtrl = async (data, Model) => {
    const newData = new Model(data);
    const response = await newData.save();
    return response;
}

export const addManyCtrl = async (data, Model) => {

}

export const updateOneCtrl = async (searchFields, data, Model) => {
    const response = await Model.updateOne(searchFields, data);
    return response;
}

export const updateManyCtrl = async (searchFields, data, Model) => {
    const response = await Model.updateMany(searchFields, data);
    return response;
}

export const deleteOneCtrl = async (searchFields, Model) => {
    const response = await Model.deleteOne(searchFields, data);
    return response;
}

export const deleteManyCtrl = async (searchFields, Model) => {
    const response = await Model.deleteMany(searchFields, data);
    return response;
}

export const aggregateCtrl = async (pipeLines) => {
    const response = await Model.aggregate(pipeLines);
    return response;
}

export const populateCtrl = async (searchFields, Model) => {

}



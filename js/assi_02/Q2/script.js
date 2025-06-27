function populateBrands() {
    const brandSelect = document.getElementById('brandSelect');
    const brands = [...new Set(Object.keys(mobiles).map(key => mobiles[key][Object.keys(mobiles[key])[0]].brand))];
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });
}

function updateModels() {
    const brandSelect = document.getElementById('brandSelect');
    const modelSelect = document.getElementById('modelSelect');
    const searchBtn = document.getElementById('searchBtn');
    const selectedBrand = brandSelect.value;
    modelSelect.innerHTML = '<option value="">Select a model</option>';
    modelSelect.disabled = !selectedBrand;
    searchBtn.disabled = !selectedBrand;

    if (selectedBrand) {
        Object.entries(mobiles).forEach(([brandKey, models]) => {
            Object.entries(models).forEach(([modelKey, model]) => {
                if (model.brand === selectedBrand) {
                    const option = document.createElement('option');
                    option.value = `${brandKey}.${modelKey}`;
                    option.textContent = model.modelName || model.model || modelKey;
                    modelSelect.appendChild(option);
                }
            });
        });
        modelSelect.disabled = false;
    }
}

function displayDetails() {
    const modelSelect = document.getElementById('modelSelect');
    const resultDiv = document.getElementById('result');
    const selectedModelPath = modelSelect.value;

    if (!selectedModelPath) {
        resultDiv.innerHTML = 'Please select a model.';
        return;
    }

    const [brandKey, modelKey] = selectedModelPath.split('.');
    const selectedModel = mobiles[brandKey][modelKey];

    const cameraDetails = selectedModel.camera.rear.resolution
        ? selectedModel.camera.rear.resolution
        : `Main: ${selectedModel.camera.rear.main}MP, Ultrawide: ${selectedModel.camera.rear.ultrawide}MP, Telephoto: ${selectedModel.camera.rear.telephoto}MP` +
          (selectedModel.camera.rear.telephotoPeriscope ? `, Telephoto Periscope: ${selectedModel.camera.rear.telephotoPeriscope}MP` : '') +
          (selectedModel.rearCamera?.features ? `, Features: ${selectedModel.rearCamera.features.join(', ')}` : '');

    resultDiv.innerHTML = `
        <h3>${selectedModel.brand} ${selectedModel.modelName || selectedModel.model || modelKey}</h3>
        <p><strong>Display:</strong> ${selectedModel.display?.size || selectedModel.displaySize} inches, ${selectedModel.display?.resolution || selectedModel.displayResolution || 'N/A'}, ${selectedModel.display?.panelType || selectedModel.displayType || 'N/A'}${selectedModel.display?.refreshRate ? `, ${selectedModel.display.refreshRate}Hz` : ''}</p>
        <p><strong>Processor:</strong> ${selectedModel.processor}</p>
        <p><strong>Memory:</strong> RAM: ${selectedModel.memory.ram}GB, Storage: ${selectedModel.memory.storage}GB</p>
        <p><strong>Rear Camera:</strong> ${cameraDetails}</p>
        <p><strong>Front Camera:</strong> ${selectedModel.camera.front}MP${selectedModel.frontCamera?.megapixel ? ` (${selectedModel.frontCamera.megapixel}MP)` : ''}</p>
        <p><strong>Battery:</strong> ${selectedModel.battery.capacity || selectedModel.batteryCapacity || selectedModel.battery}mAh${selectedModel.battery?.fastCharging ? `, Fast Charging: ${selectedModel.battery.fastCharging}` : selectedModel.fastCharging ? `, Fast Charging: ${selectedModel.fastCharging}` : ''}</p>
        <p><strong>Operating System:</strong> ${selectedModel.operatingSystem}</p>
        <p><strong>Special Features:</strong> ${selectedModel.specialFeatures.join(', ')}${selectedModel.fingerprintSensor ? `, Fingerprint Sensor: ${selectedModel.fingerprintSensor}` : ''}${selectedModel.waterResistance ? `, Water Resistance: ${selectedModel.waterResistance}` : ''}${selectedModel.expandableStorage !== undefined ? `, Expandable Storage: ${selectedModel.expandableStorage}` : ''}</p>
    `;
}
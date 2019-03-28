export const openDataBase = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("database - mostPollutedCities", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore('state', { keyPath: 'id' });
    }
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    request.onblocked = () => {
      alert('Blocked')
    };
  });
}

export const loadData = (dataBase) => {
  return new Promise((resolve, reject) => {
    const transaction = dataBase.transaction('state', 'readonly');
    const request = transaction.objectStore('state').get(1);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export const addOrUpdateData = (dataBase, data) => {
  return new Promise((resolve, reject) => {
    const transaction = dataBase.transaction('state', 'readwrite');
    const request = transaction.objectStore('state').put({ 'id': 1, 'data': data });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

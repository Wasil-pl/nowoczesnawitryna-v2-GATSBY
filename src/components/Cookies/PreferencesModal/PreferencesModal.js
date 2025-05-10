import React, { useState } from 'react';

const PreferencesModal = ({ initialPrefs, onSave, onCancel }) => {
  const [prefs, setPrefs] = useState(initialPrefs);

  const toggle = (key) => setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Dostosuj preferencje</h2>
        <p className="mb-6 text-sm text-text-dark">Wybierz, z których kategorii ciasteczek chcesz korzystać.</p>
        {[
          { key: 'functional', label: 'Funkcjonalne' },
          { key: 'analytics', label: 'Analityczne' },
          { key: 'performance', label: 'Wydajnościowe' },
          { key: 'advertising', label: 'Reklamowe' },
        ].map(({ key, label }) => (
          <label key={key} className="flex items-center justify-between mb-3 text-text-dark">
            <span>{label}</span>
            <input type="checkbox" checked={prefs[key]} onChange={() => toggle(key)} />
          </label>
        ))}
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onCancel} className="px-4 py-2 border rounded text-gray-700 border-dark">
            Anuluj
          </button>
          <button onClick={() => onSave(prefs)} className="px-4 py-2 bg-background-dark text-white rounded">
            Zapisz moje preferencje
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesModal;

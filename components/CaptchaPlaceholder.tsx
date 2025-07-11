
import React from 'react';

const CaptchaPlaceholder: React.FC = () => {
  return (
    <div className="bg-slate-100 p-3 rounded-md border border-slate-300 flex items-center justify-between">
      <div className="flex items-center">
        <input id="captcha-checkbox" type="checkbox" className="h-6 w-6 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
        <label htmlFor="captcha-checkbox" className="ml-3 text-slate-700">I'm not a robot</label>
      </div>
      <div className="text-xs text-slate-500">
        <p>reCAPTCHA</p>
        <p>Privacy - Terms</p>
      </div>
    </div>
  );
};

export default CaptchaPlaceholder;

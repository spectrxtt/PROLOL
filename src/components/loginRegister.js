import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ekko from '../img/bkx5nfkvgl781.jpg';


const LoginRegister = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isLogin ? 'https://probuild-djngo.onrender.com/api/expert-system/login/' : 'https://probuild-djngo.onrender.com/api/expert-system/register/';
        const payload = isLogin
            ? { username, password }
            : { username, password, email };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (response.ok) {
                if (isLogin) {
                    // Si el login es exitoso, guardar el token y navegar a homepage
                    localStorage.setItem('token', data.token); // Asumiendo que el backend devuelve un token
                    navigate('/'); // Navega a la ruta de homepage
                } else {
                    // Si el registro es exitoso, mostrar mensaje y cambiar a login
                    alert('Cuenta creada exitosamente. Por favor, inicia sesión.');
                    setIsLogin(true);
                    // Limpiar los campos del formulario
                    setUsername('');
                    setPassword('');
                    setEmail('');
                }
            } else {
                alert(data.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error en la conexión. Por favor, intenta más tarde.');
        }
    };

    return (
        <div className="min-h-screen w-full flex">
            {/* Left side with helmet image */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-black items-center justify-center p-8">
                <div className="relative w-full max-w-md">
                    <img
                       src={ekko}
                        alt="Firelights Arcane"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-2xl" />
                </div>
            </div>

            {/* Right side with login/register form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {isLogin ? 'Bienvenido' : 'Crear Cuenta'}
                        </h2>
                        <p className="mt-2 text-lg text-gray-600">
                            {isLogin ? 'Iniciar Sesion' : 'Inicia con la creacion de tu cuenta'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Usuario"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {!isLogin && (
                                <div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Correo"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                                    </button>
                                </div>
                                {isLogin && (
                                    <div className="flex justify-end mt-2">
                                        <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
                                            Recover Password?
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
                        >
                            {isLogin ? 'Iniciar Sesion' : 'Crear Cuenta'}
                        </button>

                        <div className="text-center">
                            <span className="text-gray-600">
                                {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes una cuenta? "}
                            </span>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setUsername('');
                                    setPassword('');
                                    setEmail('');
                                }}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                {isLogin ? '¡Crear Cuenta!' : 'Iniciar Sesion'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
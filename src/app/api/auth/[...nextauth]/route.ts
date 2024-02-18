import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'Логин', type: 'text', placeholder: 'Логин'},
                password: {password: 'Пароль', type: 'password'}
            },
            async authorize(credentials, req) {
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        credentials
                    })
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        })
    ]
})

export {handler as GET, handler as POST}
Here is how to deploy a Nuxt 3 project on GitHub Pages:

# How to

1. Install dev dependency `gh-pages`
2. Add the script `"deploy": "gh-pages -d dist"` in package.json file
3. Specifiy app `baseURL` in nuxt.config.ts
4. Specifiy `buildAssetsDir` in nuxt.config.ts that doesn't start with an underscore `_`. See the router config example below
5. Create an empty file `.nojekyll` at the root of the project
6. Generate with `npm run generate`
7. Deploy with `npm run deploy`

Router config:

```ts
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }
}
```

# What it does

The dependency will copy your dist content to a specific `gh-pages` branch that will be served by GitHub Pages. If you go to your Settings/Pages, you’ll see the active branch for your site.

The site is accessible on `https://<username>.github.io/<repository>/`. For this repository, the site is https://lucpotage.github.io/nuxt-github-pages/.

You can rely on GitHub Actions too. More info here: https://medium.com/front-end-weekly/ci-cd-with-github-actions-to-deploy-on-github-pages-73e225f8f131

More information about buildAssetsDir config: https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/

https://stackblitz.com/@alvarosabu


# Extra things
### Nuxt Modules 
- [Nuxt Sec - OWASP Top 10 and Helmet](https://nuxt.com/modules/security)
- [Device detection](https://nuxt.com/modules/device)

## Auth 
- [Clerk](https://clerk.com/)
- [VueFire](https://vuefire.vuejs.org/)
- [Supabase](https://supabase.com/docs)

## DB 
- [Turso](https://docs.turso.tech)
- [Firebase](https://firebase.google.com/docs/database?hl=es)

### 3D
- [Three.js - 3D Core Library ](https://threejs.org/)
- [Tres.js - Three 4 Vue](https://docs.tresjs.org/)
- [Cientos - Tres Abstractions](https://cientos.tresjs.org/)
- [Rapier - Physics Rust engine](https://rapier.rs/)

- [Camera ~ THREE.OrbitControls ](https://github.com/yomotsu/camera-controls)

### Socket.io
- [Nuxt-Socket.io](https://nuxt-socket-io.netlify.app/)

### Inverse Kinematics
- [Closed Chain Inverse Kinematics](https://github.com/gkjohnson/closed-chain-ik-js)
A generalized inverse kinematics solver that supports closed chains for parallel kinematics systems, dynamic reconfiguration, and arbitrary joint configuration based on damped least squares error minimization techniques

- [FullIK](https://github.com/lo-th/fullik)
- [Virtual Robotics](https://github.com/boytchev/virtual-robotics)

### IA

- [YUKA - Game AI Agents](https://github.com/Mugen87/yuka)
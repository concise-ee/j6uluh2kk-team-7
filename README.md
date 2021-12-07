# nextjs-nodejs Christmas hack template

Based on https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-next-js-app-with-nodejs-backend-7ff91841bd3

TLDR:
1. Check `TEAM` in `.github/workflows/build_deploy.yml` to see your team name
2. Try local dev
3. Every push will do a redeploy
4. You don't have to use this template, but it's a quickstart to just get something running.

try local dev, then try if depl

## Local dev

### start the api
cd api
npm install
npm run dev

### start the nextjs app
cd my-app
npm install
npm run start:dev

## Github Actions

Automatic deploy is done by `.github/workflows/build_deploy.yml`

## Kubernetes

1. after following command browser will be opened, where you should log into google cloud with Concise email to authenticate gcloud CLI
`gcloud auth login`

2. updates a kubeconfig file (~/.kube/config) with appropriate credentials and endpoint information to point kubectl at a specific cluster in Google Kubernetes Engine.
`gcloud container clusters get-credentials j6uluh2kk --region europe-west1 --project j6uluh2kk`

3. check that *kubectl* is properly installed (at least version 1.18)
`kubectl version`

4. get k8s nodes in the cluser to check that `kubectl` can communicate with the cluster
`kubectl get nodes`

5. Configure your team namespace
`kubectl config set-context $(kubectl config current-context) --namespace=teamname`
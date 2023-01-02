# Zarela Graves 👩🏻‍💻

My personal website

Live Site: www.zarelagraves.com
Redirected from: https://zarela-graves.vercel.app

## Git Workflow

1.  Forking project:
    - Click on `Fork` from repo (top right corner)
    - After you pick your profile or organization, you should be taken to your own copy of this repo. Ex: `your-user-name/ZarelaGraves`
    - Click on `Clone or download`, the copy link from clipboard
    - Navigate to desire location from your terminal. Ex: Desktop, then on terminal: `git clone` + paste url address you copied.
    - cd into the folder, where you should be in the `master` branch.
2.  Creating a new branch:
    - `git checkout -b feature/descriptive-name`  
      Please use `feature/` for any new features and `bugfix/` respectively.
3.  Git workflow - Make changes on your new branch, check always with `git status` and only commit files you wanted to change.
    - If after `npm install` you noticed `package.json` has changed, please checkout so that file is not committed. You can remove changes with: `git checkout package.json` or any name of file you desire to remove.
    - Do `git status` again and if you are ready, add and commit changes with: `git add .` then `git commit -m "Some descriptive message"`, followed by `git push --set-upstream origin your-branch-name`.
4.  Rebasing changes to prepare for pull request. Please checkout to master, pull latest changes and rebase into your branch:
    - `git checkout master`
    - `git pull`
    - `git checkout feature/your-branch`
    - `git rebase -i origin/master` squash all commits to one short and descriptive message
    - `git push -f`
5.  Opening a pull request
    - Go to GitHub web and click on `New pull request`
    - Pick `base: master` <- `compare:your-branch`
    - Wait for approval

## Requirements:

- node: `v7.4.0`
- npm `v6 +`

## Helpful Commands:

- Start Server: `node server`

- NPM Install: `npm install`

- The application will be running on: `localhost:3000/`

👩‍🎤 Made by ZG Stardust

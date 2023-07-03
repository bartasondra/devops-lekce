# Git cheat sheet

### install git
```
sudo apt-get update

sudo apt-get install git-all

git version
```

### Clone github repository
```
git clone <git repo url>

git clone https://github.com/bartasondra/devops-lekce.git
```

### List branches
```
git branch
```

### create new branch and switch into 
```
# switch into already created branch
git checkout <branch name>

# create branch and switch into it
git checkout -b <branch name>
```

### list changes
```
git status
```

### git add changes
```
git add <path to change files/folder>

# adding all changes starting in root of folder ./
git add .

# adding changes in one file
git add file.txt

# adding all changes in folder some-folder/some-other-folder/
git add some-folder/some-other-folder/
```

### save added changes in commit
```
git commit -m "some description what was done"
```

### push changes to remote reposiotry (on github, gitlab or bitbucket)

```
git push
```

### pull changes from others 
```
git pull
```

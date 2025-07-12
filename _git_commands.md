# add yourself as an author
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

# Change default GIT editor to trae.ai
git config --global core.editor "trae.ai".

# Initialize a git repository
git init

# Add a file to staging area
git add <file>

# Add all files to staging area
git add .

# check project status
git status

# commit changes
git commit -m "My message"

# undo changes made to a file
git restore <file>

# undo changes made to all files
git restore .

# show commit history
git log

# show commit history in a nice format
git log --oneline --graph --decorate --all


# Link local repository to remote repository
- git remote add origin <remote-repository-url>

# Push changes to remote repository
- git push -u origin main

# Pull changes from remote repository
git pull origin master

# Check the remote repository URL
git remote get-url origin

# Create a new branch 
git branch <branch-name>

# get a list of all branches
git branch -a

# Delete a branch
git branch -d <branch-name>

# Switch to a branch
git checkout <branch-name>

# Merge a branch into the current branch
git merge <branch-name>
# Useful Tips

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

### Undoing your last commit that has not been pushed using git reset --soft

git reset --soft HEAD~
or
git reset --soft HEAD^

## Undoing several commits 

git reset --soft HEAD~2
git reset --soft HEAD~3
git reset --soft HEAD~4
etc...

Your latest commit(s) will now be undone. Your changes remain in place, and the files go back to being staged (e.g. with git add) so you can make any additional changes or add any missing files. You can then make a new commit.
echo "# multi-page-website-styled-davidb-exrdtcfyvubyiu656e45wesd" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Xasbus/multi-page-website-styled-davidb-exrdtcfyvubyiu656e45wesd.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push -u origin main
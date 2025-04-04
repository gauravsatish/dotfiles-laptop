if status is-interactive
    # Commands to run in interactive sessions can go here
end

set -g fish_greeting
set --global fish_color_command blue
fish_add_path /home/link/.spicetify
fish_add_path /home/link/.bin
#export SSH_AUTH_SOCK=${HOME}/.ssh/ssh-agent.sock
#set -x SSH_AUTH_SOCK $HOME/.ssh/ssh-agent.sock
set -x SSH_AUTH_SOCK "$XDG_RUNTIME_DIR/ssh-agent.socket"

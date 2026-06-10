#!/bin/bash

echo "Select task:"
echo "1) FEAT"
echo "2) FIX"
echo "3) HOTFIX"
echo "4) FEAT (Modified)"
echo "5) MIGRATION"
read -p "Select number or typing other task type example 'DOING': " task_choice

case $task_choice in
    1) task="FEAT" ;;
    2) task="FIX" ;;
    3) task="HOTFIX" ;;
    4) task="FEAT (Modified)" ;;
    5) task="MIGRATION" ;;
    *) task="$task_choice" ;;
esac

read -p "Link: " link
read -p "Message: " message

commit_msg="[$task][$link] : $message"

git commit -m "$commit_msg"

from turtle import *

speed (10)

color ("red")
begin_fill ()

width (7)


forward (200)
left (90)
forward (200)
left (90)
forward (200)
left (90)
forward (200)
left (90)
forward (70)
left (90)
end_fill ()

color ("yellow")
begin_fill ()
forward (80)
right (90)
forward (60)
right (90)
forward (80)
end_fill ()

penup()
goto (200, 200)
pendown ()

color ("blue")
begin_fill ()
right (150)
forward (200)
left (120)
forward (200)
end_fill ()

penup ()
goto (70,120)
pendown()
color ("green")
begin_fill ()
left (210)
forward (40)
left (90)
forward (40)
left (90)
forward (40)
left (90)
forward (40)
end_fill ()

begin_fill ()
penup ()
goto (130, 120)
pendown ()
forward (40)
left (90)
forward (40)
left (90)
forward (40)
left (90)
forward (40)
left (90)
end_fill ()


exitonclick ()




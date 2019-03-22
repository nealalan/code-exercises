def nb_year(p0, percent, aug, p):
    years = 0
    total = p0
    while (total < p):
        years = years + 1
        total = total + (total * (percent / 100)) + aug
    return (years)


print (str(nb_year(1500000, 0.25, 1000, 2000000)) + " years")

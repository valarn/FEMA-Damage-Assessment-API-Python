from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm

app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'

posts = [
    {
        'author': 'Vala',
        'title': 'How to build a net in your home',
        'content': 'If you have a huge apartment then you need to build a huge hammock for all of your friends to enjoy.',
        'date_posted': 'April 20, 2018'
    },
    {
        'author': 'John Kim',
        'title': 'Damage Assessment',
        'content': 'FEMA can you help you return your home back to its original state. Find out how.',
        'date_posted': 'April 21, 2018'
    }
]

@app.route("/", methods=['GET', 'POST'])
@app.route("/home")
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', title='Login', form=form)


@app.route("/about")
def about():
    return render_template('about.html', title='About')


@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('about'))
    return render_template('register.html', title='Register', form=form)





if __name__ == '__main__':
    app.run(debug=True)
# from flask import Flask, render_template
#
# # from forms import RegistrationForm, LoginForm
#
# app = Flask(__name__)
#
# @app.route("/")
# @app.route("/home")
# def hello():
#     return render_template('home.html')
#
# @app.route("/about")
# def about():
#     return render_template('about.html')
# #app.config['SECRET_KEY'] = '8543859048359083490'
# #
# # @app.route("/")
# @app.route("/home")
# def home():
#      return '''<!doctype html>
#      <html>
#
#      '''
# #
# # @app.route("/about")
# # def about():
# #     return render_template('about.html',title = 'About')
# #
# # @app.route("/register")
# # def register():
# #     form = RegistrationForm()
# #     return render_template('register.html',title = 'Register',form = form)
# #
# #
# # @app.route("/login")
# # def register():
# #     form = LoginForm()
# #     return render_template('login.html',title = 'Login',form = form)
# #
# #
# if __name__ == '__main__':
#       app.run(debug=True) #allows the user to use the input"python file.py" into command terminal

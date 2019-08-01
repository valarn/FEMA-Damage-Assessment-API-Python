from flask import Flask, render_template, url_for, flash, redirect, request
import func as custom
from forms import RegistrationForm, LoginForm
from werkzeug import secure_filename

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






@app.route('/upload')
def upload():
    return render_template('upload.html')

@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      print(type(f))
      f.save(f'user_photo/{secure_filename(f.filename)}')
      master_results = custom.master_query(f.filename)
      return render_template('uploader.html',
      zillow_id = master_results['zillow_id'],
      home_type = master_results['home_type'],
      year_built = master_results['year_built'],
      property_size = master_results['property_size'],
      home_size = master_results['home_size'],
      bathrooms = master_results['bathrooms'],
      bedrooms = master_results['bedrooms'],
      last_sold_date = master_results['last_sold_date'],
      last_sold_price = master_results['last_sold_price'],
      zestimate_amount = master_results['zestimate_amount'])










if __name__ == '__main__':
    app.run(debug=True)
